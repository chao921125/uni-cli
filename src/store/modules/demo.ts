import { defineStore } from "pinia";

export const useDemo = defineStore("demo", {
    state: (): any => {
        return {
            demo: {
                id: 0,
                name: "",
            },
        };
    },
    getters: {
        getDemoById: (state) => state.demo.id + 1,
        getDemo(): any {
            return this.demo;
        },
    },
    actions: {
        setDemo(data: any) {
            this.demo = data;
        },
    },
});