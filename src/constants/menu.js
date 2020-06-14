const data = {
  main: [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "fa fa-tachometer",
      to: "/app/dashboard",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: "fa fa-bell",
      to: "/app/notifications",
    },
    {
      id: "reports",
      label: "Reports",
      icon: "fa fa-clipboard",
      to: "/app/reports",
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: "fa fa-calendar",
      to: "/app/calendar",
    }
  ],
  secondary: [
    {
      id: "logout",
      label: "Logout",
      icon: "fa fa-power-off",
      to: "/user/login",
    },
    {
      id: "help",
      label: "Help",
      icon: "fa fa-info-circle",
      to: "/app/help",
    },
    {
      id: "profile",
      label: "Profile",
      icon: "fa fa-user-circle",
      to: "/app/profile",
    }
  ]
}

module.exports = data;
