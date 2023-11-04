import UserNotLoggedInException from "../exception/UserNotLoggedInException";
import User from "../user/User";
import Trip from "./Trip";
import TripRepository from "./TripRepository";

export default class TripService {
    public getTripsByUser(user: User, loggedInUser: User | null): Trip[] {
        if (loggedInUser == null) {
            throw new UserNotLoggedInException();
        }
        
        return user.isFriendsWith(loggedInUser)
            ? this.tripsBy(user)
            : [];
    }

    protected tripsBy(user: User) {
        return TripRepository.findTripsByUser(user);
    }
}
