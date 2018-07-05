const app = {
    state: {
        menu: [1],
        isCollapse: localStorage.getItem('isCollapse') === 'true'
    },
    mutations: {
        changeCollapse: (state, status = true) => {
            state.isCollapse = status;
            localStorage.setItem('isCollapse', status);
        }
    },
    actions: {

    }
};

export default app;
