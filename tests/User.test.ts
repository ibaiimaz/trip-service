import User from "../src/user/User";
import UserBuilder from "./UserBuilder";

describe("User", () => {
    const A_FRIEND = new User();
    const A_STRANGE = new User();

    it("should check when friends with another user", () => {
        const user = UserBuilder.aUser().friendsWith(A_FRIEND).build();

        expect(user.isFriendsWith(A_STRANGE)).toEqual(false);
        expect(user.isFriendsWith(A_FRIEND)).toEqual(true);
    });
});