import React, { useState } from "react";
import DashboardContext from "./DashboardContext";

const DashboardProvider = ({ children }) => {
  const [state, setState] = useState({
    currentPage: "",
    loading: false,
  });



  const contextValue = {
    state,
    setLoading: (loading) =>
      setState((prev) => ({ ...prev, loading })),
    setCurrentPage: (page) =>
      setState((prev) => ({ ...prev, currentPage: page })),
    setUsers: (users) =>
      setState((prev) => ({ ...prev, users: [...users] })),
    setTasks: (tasks) =>
      setState((prev) => ({ ...prev, tasks: [...tasks] })),
  };

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
