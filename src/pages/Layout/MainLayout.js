import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import routes from "../../routes";
import NotFoundPage from "../NotFound/PageNotFound";

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: "data-toolpad-color-scheme" },
  colorSchemes: { light: true, dark: true },
});

// 🔹 Convert routes.js into Toolpad's NAVIGATION format
// 🔹 Convert routes.js into Toolpad's NAVIGATION format
// 🔹 Convert routes.js into Toolpad's NAVIGATION format
function buildNavigation(routes) {
  return routes.map((route) => {
    // If a path exists, use it for navigation
    // Toolpad uses `segment`, so we trim leading slash for clean match
    const segment = route.path
      ? route.path.replace(/^\//, "") // keep full path but remove leading `/`
      : route.title.toLowerCase();

    if (route.children) {
      return {
        // segment,
        title: route.title,
        icon: route.icon,
        children: buildNavigation(route.children), // keep child paths intact
      };
    }

    return {
      segment,
      title: route.title,
      icon: route.icon,
    };
  });
}



// 🔹 Bridge between React Router and Toolpad
function RouterAdapter({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const router = {
    pathname: location.pathname.replace("/", "") || "dashboard",
    navigate: (path) => navigate(path),
  };

  return children(router);
}

function MainLayout(props) {
//   const { window } = props;

  return (
    <BrowserRouter>
      <RouterAdapter>
        {(router) => (
          <AppProvider navigation={buildNavigation(routes)} router={router} theme={demoTheme} 
          branding={{title:"School Name Here" , logo: <img src="/logo213.png" alt="My App Logo" style={{ height: 32 }} />}}>
            <DashboardLayout>
              <Routes>
                {routes.map((route) =>
                  route.children ? (
                    route.children.map((child) => (
                      <Route key={child.path} path={child.path} element={child.element} />
                    ))
                  ) : (
                    <Route key={route.path} path={route.path} element={route.element} />
                  )
                )}
                {/* default fallback */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </DashboardLayout>
          </AppProvider>
        )}
      </RouterAdapter>
    </BrowserRouter>
  );
}

MainLayout.propTypes = { window: PropTypes.func };

export default MainLayout;
