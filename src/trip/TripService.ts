import UserNotLoggedInException from "../exception/UserNotLoggedInException";
import User from "../user/User";
import UserSession from "../user/UserSession";
import Trip from "./Trip";
import TripRepository from "./TripRepository";

export default class TripService {
    public getTripsByUser(user: User): Trip[] {
        let tripList: Trip[] = [];
        const loggedUser: User | null = this.loggedInUser();
        let isFriend: boolean = false;

        if (loggedUser != null) {
            for (const friend of user.getFriends()) {
                if (friend === loggedUser) {
                    isFriend = true;
                    break;
                }
            }

            if (isFriend) {
                tripList = this.tripsBy(user);
            }

            return tripList;
        } else {
            throw new UserNotLoggedInException();
        }
    }

    protected tripsBy(user: User) {
        return TripRepository.findTripsByUser(user);
    }

    protected loggedInUser(): User | null {
        return UserSession.getLoggedUser();
    }
}
