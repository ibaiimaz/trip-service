import UserNotLoggedInException from "../exception/UserNotLoggedInException";
import User from "../user/User";
import Trip from "./Trip";
import TripRepository from "./TripRepository";

export default class TripService {
    constructor(private tripRepository: TripRepository = new TripRepository()) {}

    public getTripsByUser(user: User, loggedInUser: User | null): Trip[] {
        if (loggedInUser == null) {
            throw new UserNotLoggedInException();
        }
        
        return user.isFriendsWith(loggedInUser)
            ? this.tripsBy(user)
            : [];
    }

    private tripsBy(user: User) {
        return this.tripRepository.tripsBy(user);
    }
}
