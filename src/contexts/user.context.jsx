import { useState, useEffect } from "react";
// 导入创建上下文的基础组件 外部的全局状态
import { createContext } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
// 需要访问的实际值
export const UserContext = createContext({
    // initial value
    currentUser: null,
    setCurrentUser: () => null,
});

// 提供外部的组件 往往是用于全局使用
export const UserProvider = ({ children }) => {
    // 创建当前用户的信息
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    
    useEffect(() => {
        // 使用firebase提供的监听器进行用户的监听
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                // 创建用户文档
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    });
    // 定义上下文环境 都有一个提供者 这个提供者就是一个组件
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
/**
 * <UserProvider> <app></app></UserProvider>
 */