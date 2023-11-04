import Trip from "../src/trip/Trip";
import User from "../src/user/User";

export default class UserBuilder {
    private trips: Trip[] = [];
    private friends: User[] = [];

    static aUser(): UserBuilder {
        return new UserBuilder();
    }

    friendsWith(...users: User[]) {
        this.friends = users;
        return this;
    }

    withTrips(...trips: Trip[]) {
        this.trips = trips;
        return this;
    }

    build(): User {
        const user = new User();
        this.addFriendsTo(user);
        this.addTripsTo(user);
        return user;
    }
    private addTripsTo(user: User) {
        this.trips.forEach((trip) => {
            user.addTrip(trip)
        });
    }

    private addFriendsTo(user: User) {
        this.friends.forEach((friend) => {
            user.addFriend(friend);
        });
    }
}
