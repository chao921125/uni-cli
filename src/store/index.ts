// https://pinia.vuejs.org/ 不必采用高级的setup写法
import { createPinia, storeToRefs } from "pinia";

// 创建
const store = createPinia();

// 不必额外导入，直接使用此方法
export const getStoreRefs = (store: any) => {
    return storeToRefs(store);
};

// pinia.use(() => {
// 	return { testDysId: 1 };
// });

// 导出自定义其他状态文件
import { useDemo } from "./modules/demo";
export interface IAppStore {
    useDemo: ReturnType<typeof useDemo>;
}
export const appStore: IAppStore = {
    useDemo: useDemo(store),
} as IAppStore;
export default store;