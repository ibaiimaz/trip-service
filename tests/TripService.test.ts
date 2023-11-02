import UserNotLoggedInException from "../src/exception/UserNotLoggedInException";
import Trip from "../src/trip/Trip";
import TripService from "../src/trip/TripService";
import User from "../src/user/User";

describe("TripService", () => {
    const GUEST = null;
    const ANY_USER = new User();
    const REGISTERED_USER = new User();
    const ANOTHER_USER = new User();
    const TO_LONDON = new Trip();
    let loggedInUser: User | null;

    it("should validate logged in user", () => {
        const tripService = new TestableTripService();

        loggedInUser = GUEST;

        expect(() => tripService.getTripsByUser(ANY_USER)).toThrow(UserNotLoggedInException)
    });

    it("should return no trips when the users are not friends", () => {
        const tripService = new TestableTripService();

        loggedInUser = REGISTERED_USER;

        const stranger = new User();
        stranger.addFriend(ANOTHER_USER);
        stranger.addTrip(TO_LONDON);

        const trips = tripService.getTripsByUser(stranger);

        expect(trips).toHaveLength(0);
    });


    class TestableTripService extends TripService {
        protected loggedInUser(): User | null {
            return loggedInUser;
        }
    }
});
