import UserNotLoggedInException from "../src/exception/UserNotLoggedInException";
import Trip from "../src/trip/Trip";
import TripService from "../src/trip/TripService";
import User from "../src/user/User";
import UserBuilder from "./UserBuilder";

describe("TripService", () => {
    const GUEST = null;
    const ANY_USER = new User();
    const REGISTERED_USER = new User();
    const ANOTHER_USER = new User();
    const TO_LONDON = new Trip();
    const TO_PARIS = new Trip();

    let tripService: TripService;

    const mockTripRepository = {
        tripsBy: jest.fn()
    }

    beforeEach(() => {
        tripService = new TripService(mockTripRepository);
    });

    it("should validate logged in user", () => {
        expect(() => tripService.getTripsByUser(ANY_USER, GUEST)).toThrow(UserNotLoggedInException)
    });

    it("should return no trips when the users are not friends", () => {
        const stranger: User = UserBuilder.aUser()
                                .friendsWith(ANOTHER_USER)
                                .withTrips(TO_LONDON)
                                .build();

        stranger.addFriend(ANOTHER_USER);
        stranger.addTrip(TO_LONDON);

        const trips = tripService.getTripsByUser(stranger, REGISTERED_USER);

        expect(trips).toHaveLength(0);
    });

    it("should return trips when the users are friends", () => {
        const friend: User = UserBuilder.aUser()
                                .friendsWith(REGISTERED_USER, ANOTHER_USER)
                                .withTrips(TO_LONDON, TO_PARIS)
                                .build();

        mockTripRepository.tripsBy.mockReturnValue(friend.getTrips());

        const trips = tripService.getTripsByUser(friend, REGISTERED_USER);

        expect(trips).toEqual([TO_LONDON, TO_PARIS]);
    });
});
