const STORAGE_KEY = 'todos-vuejs'
export default {
	fetch(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	save(items){
       window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	},
	deletesa(index){
		var getlocalData=JSON.parse(window.localStorage.getItem(STORAGE_KEY));
		var dellocalData=getlocalData.splice(index,1);
		var dellocalDataStr=JSON.stringify(getlocalData);
		var localDataStr=JSON.stringify(getlocalData);
		window.localStorage.setItem(STORAGE_KEY,localDataStr)
	}
}