import UserNotLoggedInException from "../exception/UserNotLoggedInException";
import User from "../user/User";
import Trip from "./Trip";
import TripRepository from "./TripRepository";

export default class TripService {
    constructor(private tripRepository: TripRepository = new TripRepository()) {}

    public getTripsByUser(user: User, loggedInUser: User | null): Trip[] {
        this.validate(loggedInUser);
        
        return user.isFriendsWith(loggedInUser as User)
            ? this.tripsBy(user)
            : this.noTrips();
    }

    private noTrips(): Trip[] {
        return [];
    }

    private validate(loggedInUser: User | null) {
        if (loggedInUser == null) {
            throw new UserNotLoggedInException();
        }
    }

    private tripsBy(user: User) {
        return this.tripRepository.tripsBy(user);
    }
}
