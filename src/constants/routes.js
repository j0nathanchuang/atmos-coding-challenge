// Views
import Homes from "../views/Homes";
import Lots from "../views/Lots";
import Error from "../views/Error";

const ROUTES = [
    {
        id: 0,
        title: "Homes",
        path: "/homes",
        component: Homes,
    },
    {
        id: 1,
        title: "Lots",
        path: "/lots",
        component: Lots,
    },
    {
        id: 999,
        path: "*",
        component: Error,
    }
];

export default ROUTES;