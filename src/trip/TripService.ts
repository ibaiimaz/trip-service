import UserNotLoggedInException from "../exception/UserNotLoggedInException";
import User from "../user/User";
import UserSession from "../user/UserSession";
import Trip from "./Trip";
import TripRepository from "./TripRepository";

export default class TripService {
    public getTripsByUser(user: User): Trip[] {
        const loggedUser = this.loggedInUser();
        if (loggedUser == null) {
            throw new UserNotLoggedInException();
        }
        
        return user.isFriendsWith(loggedUser)
            ? this.tripsBy(user)
            : [];
    }

    protected tripsBy(user: User) {
        return TripRepository.findTripsByUser(user);
    }

    protected loggedInUser(): User | null {
        return UserSession.getLoggedUser();
    }
}
