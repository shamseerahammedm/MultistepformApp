export const submitFormApiRequestSimulate = () => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve({ statusCode : 200, message : 'Successfully Submitted Form.' , status : true})
		},2000)
	});
}
