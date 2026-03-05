import { useContext } from "react"
import { UserContext } from "../user.context";
import { followersList, followingList, pendingReq } from "../services/user.api";

export const useUser = () => {
    const context = useContext(UserContext);

    const { loading, setLoading, followers, setFollowers, following, setFollowing, pendingrequest, setPendingrequest } = context;

    const handelFollowersList = async () => {

        setLoading(true);

        const response = await followersList();
        console.log(response);
        
        setFollowers(response.followers);
        console.log(response.followers);
        

        setLoading(false);
    }
    
    const handelFollowingList = async () => {

        setLoading(true);

        const response = await followingList();
        console.log(response);
        
        setFollowing(response.following);
        console.log(response);
        

        setLoading(false);
    }
    
    const handelPendingReq = async () => {

        setLoading(true);

        const response = await pendingReq();
        console.log(response);
        
        setPendingrequest(response.pendingRequests);
        console.log(response);
        

        setLoading(false);
    }

    return {
        loading, followers, handelFollowersList, following, handelFollowingList, pendingrequest, handelPendingReq
    }
}