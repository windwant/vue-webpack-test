/**
 * 存入localStorage
 */
export const setStore = (key,value)=>{
	if(!key) return;
	if(typeof value !== 'string'){
		value = value.stringify(value);
	}
	window.localStorage.setItem(key,value)
}

/**
 * 获取localStorage
 */

export const getStore = key =>{
	if(!key) return;
	return window.localStorage.getItem(key)
}

/**
 * 删除localStorage
 */
export const removeStore = key =>{
	if(!key) return;
	window.localStorage.removeItem(key)
}

/**
 * 清空localStorage
 */
export const clearStore = () =>{
	window.localStorage.clear()
}
