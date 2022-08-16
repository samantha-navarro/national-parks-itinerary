import React from "react";
import Footer from "./Footer.js";
import NatureVideo from "./NatureVideo.js";
import NavBar from "./NavBar.js";


export default function MainPage () {

    // const [user, setUser] = useState(null);
      
    //     useEffect(() => {
    //       fetch("/me").then((response) => {
    //         if (response.ok) {
    //           response.json().then((user) => setUser(user));
    //         }
    //       });
    //     }, []);
      
    //     if (user) {
    //       return <h2>Welcome, {user.username}!</h2>;
    //     } else {
    //       return <Login onLogin={setUser} />;
    //     }
    //   }
    return (
        <div>
            <NavBar />
            <NatureVideo />
            {/* <Footer /> */}
        </div>
    )
}