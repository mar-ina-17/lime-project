import { ParentProps } from "@/types/properties";
import {
  PunkAddBeer,
  PunkAuthentication,
  PunkFavourites,
  PunkHome,
} from "@/views";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { useAccount } from "wagmi";

export const PrivateRoute = ({ children }: ParentProps) => {
  const { isConnected } = useAccount();
  return isConnected ? children : <Navigate to="/" />;
};

export const useMyRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <PunkAuthentication />,
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Outlet />
        </PrivateRoute>
      ),
      children: [
        {
          path: "home",
          element: <PunkHome />,
        },
        {
          path: "add-beer",
          element: <PunkAddBeer />,
        },
        {
          path: "favs",
          element: <PunkFavourites />,
        },
      ],
    },
  ]);
};
