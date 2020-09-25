import ajax from "./ajax";
export const reqSearch = () => ajax('',{})
export const reqUserDataSource = () => ajax('/api/getUserList',{})
export const reqSearchUser = (keyword,type) =>ajax('/api/getUserList',{keyword,type})
