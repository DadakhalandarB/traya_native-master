import { useState } from "react";
import { SECURITY_TOKEN } from "../constants/config";
import { handleCustomUserAttributes } from "../helpers/handleMoengage";

const useUploadImage = () => {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [data, setData] = useState("");

	const uploadImage = async (image, url) => {
    
	 if(image instanceof Blob)	{
		setIsLoading(true);
		if (!Boolean(image)) {
			setError("Please upload a jpg or png image");
			setIsLoading(false);
			return { hasError: true };
		}

		const _formData = new FormData();
		_formData.append("image", image, image.newName);

		const _uploadOptions = {
			method: "POST",
			body: _formData,
			headers: {
				Authorization: `Bearer ${SECURITY_TOKEN}`,
			},
		};
		let responseData = {};
		try {
			const _uploadRes = await fetch(url, _uploadOptions);

			if (_uploadRes.status === 200) {
				const _data = await _uploadRes.json();

				responseData = { ..._data };
				setData(responseData);
				setIsSuccess(true);
				handleCustomUserAttributes("scalp_pic_uploaded", "yes");
				return { data: responseData };
			} else {
				setError("Sorry we are unable to process your data.");
				return { hasError: true };
			}
		} catch (err) {
			setError(() => err.message);
			return { hasError: true };
		} finally {
			setIsLoading(false);
		}
	}else{
		if (!Boolean(image)) {
			setError("Please upload a jpg or png image");
			setIsLoading(false);
			return { hasError: true };
		}
		try{
			const _apicalls = image.map( async  (eachImage)=>{
				const _formData = new FormData();
				_formData.append("image", eachImage, eachImage.newName);
				const _uploadOptions = {
					method: "POST",
					body: _formData,
					headers: {
					  Authorization: `Bearer ${SECURITY_TOKEN}`,
					},
				  };
				  const _uploadRes = await fetch(url, _uploadOptions);
	
			})
			const _data =await  Promise.all(_apicalls);
			handleCustomUserAttributes("scalp_pic_uploaded", "yes");
			setIsSuccess(true);
			return  { data: {..._data} };
		}catch(err){
			 setError(err.message);
			 setIsLoading(false);
			 return { hasError: true };
		}
		// console.log('273273827',image);
		// for (const eachImage of image){
		// 	const _formData = new FormData();
		// 	_formData.append("image", eachImage, eachImage.newName);
		// 	let responseData = {};
		// 	const _uploadOptions = {
		// 		method: "POST",	
		// 		body: _formData,
		// 		headers: {
		// 			Authorization: `Bearer ${SECURITY_TOKEN}`,
		// 		},
		// 	};
		
		// 	console.log(_uploadOptions,'uploadDatat',eachImage)
		// 	try {
		// 		const _uploadRes = await fetch(url, _uploadOptions);
	
		// 		if (_uploadRes.status === 200) {
		// 			const _data = await _uploadRes.json();
	
		// 			responseData = { ..._data };
		// 			setData(responseData);
		// 			setIsSuccess(true);
		// 			handleCustomUserAttributes("scalp_pic_uploaded", "yes");
		// 			return { data: responseData };
		// 		} else {
		// 			console.log('ok983099280980983209')
		// 			setIsLoading(false);
		// 			setError("Sorry we are unable to process your data.");
		// 			return { hasError: true };
		// 		}
		// 	} catch (err) {
		// 		setError(() => err.message);
		// 		return { hasError: true };
		// 	} finally {
		// 		setIsLoading(false);
		// 	}
		// }

	}}

	return { error, isLoading, isSuccess, uploadImage, data };
};


  
  

export default useUploadImage;
