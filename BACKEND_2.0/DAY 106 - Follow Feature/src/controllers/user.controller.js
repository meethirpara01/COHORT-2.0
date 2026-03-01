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

    const ifAlredyFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    });

    if (ifAlredyFollowing) {
        return res.status(200).json({
            message: `You are Alredy Following ${followeeUsername}`,
            Follow: ifAlredyFollowing
        });
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    });

    res.status(201).json({
        message: `You are now following ${followeeUsername}`,
        follow: followRecord
    });
}

async function unFollowUserController(req, res) {

    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    });

    if (!isUserFollowing) {
        return res.status(200).json({
            message: `You don't Following this ${followeeUsername}`,
        });
    }

    await followModel.findByIdAndDelete(isUserFollowing._id);

    res.status(201).json({
        message: `You Have Unfollow ${followeeUsername}`
    });
}

module.exports = {
    followUserController,
    unFollowUserController
}