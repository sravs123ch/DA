// export const routeNames = {
//   login: "/",
//   dashboardLayout: "/dashboard",
//   videoPlayback: (id) => `/playback/${id}`,
// };

export const routeNames = {
  login: "/",
  dashboardLayout: "/dashboard",
  videoPlayback: (courseId, videoId) => `/playback/${courseId}/${videoId}`,
};
