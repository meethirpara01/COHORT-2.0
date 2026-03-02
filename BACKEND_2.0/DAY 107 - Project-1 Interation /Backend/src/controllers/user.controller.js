const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {

    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    if (followerUsername === followeeUsername) {
        return res.status(400).json({
            message: "You Can Not Follow Your Self"
        });
    }

    const isFolloweeExist = await userModel.findOne({
        username: followeeUsername
    });

    if (!isFolloweeExist) {
        return res.status(400).json({
            message: "User you are trying to follow dose not exist"
        });
    }

    const followRecord = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    });

    if (!followRecord) {
        const followRequest = await followModel.create({
            follower: followerUsername,
            followee: followeeUsername,
            status: "pending"
        });

        return res.status(201).json({
            message: `You sent follow request to ${followeeUsername}`,
            follow: followRequest
        });
    }
    else {
        if (followRecord.status === "pending") {
            return res.status(200).json({
                message: `Request already sent to ${followeeUsername}`,
                follow: followRecord
            });
        }
        if (followRecord.status === "accepted") {
            return res.status(200).json({
                message: `You Already following ${followeeUsername}`,
                follow: followRecord
            });
        }
        if (followRecord.status === "rejected") {

            followRecord.status = "pending";

            await followRecord.save();

            return res.status(200).json({
                message: `Request sent to ${followeeUsername}`,
                follow: followRecord
            });
        }
    }
}

async function GetPendingRequestsController(req, res) {

    const followee = req.user.username

    const pendingRequest = await followModel.find({
        followee: followee,
        status: "pending"
    });

    if (pendingRequest.length === 0) {
        return res.status(200).json({
            message: "There is no pending requests"
        });
    }

    res.status(200).json({
        message: "Requests are coming to this users",
        pendingRequests: pendingRequest
    });
}

async function AcceptRequestController(req, res) {

    const followeeUsername = req.user.username;
    const followerUsername = req.params.username;

    if (followeeUsername === followerUsername) {
        return res.status(400).json({
            message: "You Can Not Follow Your Self"
        });
    }

    const requestRecord = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
        status: "pending"
    });

    if (!requestRecord) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    requestRecord.status = "accepted";
    await requestRecord.save();

    res.status(200).json({
        message: `Request accepted of ${followerUsername}`,
        requestRecord
    });
}

async function RejectRequestController(req, res) {

    const followeeUsername = req.user.username;
    const followerUsername = req.params.username;

    if (followeeUsername === followerUsername) {
        return res.status(400).json({
            message: "You Can Not Follow Your Self"
        });
    }

    const requestRecord = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
        status: "pending"
    });

    if (!requestRecord) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    requestRecord.status = "rejected";
    await requestRecord.save();

    res.status(200).json({
        message: `You rejected request from ${followerUsername}`,
        requestRecord
    });
}

async function unFollowUserController(req, res) {

    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    if (followerUsername === followeeUsername) {
        return res.status(400).json({
            message: "You Can Not UnFollow Your Self"
        });
    }

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    });

    if (!isUserFollowing) {
        return res.status(200).json({
            message: `You don't Following this ${followeeUsername}`,
        });
    }
    else {

        await isUserFollowing.deleteOne();

        return res.status(200).json({
            message: `No active follow relationship with ${followeeUsername}`,
        });
    }
}

async function GetFollowersListController (req, res) {

    const followerUsername = req.user.username;

    const followersList = await followModel.find({
        followee: followerUsername,
        status: "accepted"
    });

    return res.status(200).json({
        message: "Followers List Fetched Successfully",
        followers: followersList
    });
}

module.exports = {
    followUserController,
    GetPendingRequestsController,
    AcceptRequestController,
    RejectRequestController,
    unFollowUserController,
    GetFollowersListController
}