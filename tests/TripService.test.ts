import UserNotLoggedInException from "../src/exception/UserNotLoggedInException";
import TripService from "../src/trip/TripService";
import User from "../src/user/User";

describe("TripService", () => {
    const GUEST = null;
    const ANY_USER = new User();
    let loggedInUser: User | null;

    it("should validate logged in user", () => {
        const tripService = new TestableTripService();

        loggedInUser = GUEST;

        expect(() => tripService.getTripsByUser(ANY_USER)).toThrow(UserNotLoggedInException)
    });


    class TestableTripService extends TripService {
        protected loggedInUser(): User | null {
            return loggedInUser;
        }
    }
});
