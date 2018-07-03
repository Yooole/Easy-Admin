const app = {
    state: {
        menu: [1],
        isCollapse: false
    },
    mutations: {
        changeCollapse: (state, status = true) => {
            state.isCollapse = status
        }
    },
    actions: {

    }
};

export default app;
