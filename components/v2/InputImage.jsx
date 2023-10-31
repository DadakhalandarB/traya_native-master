import { useEffect, useRef, useState } from "react";
import isEmpty from "lodash/isEmpty";
import selfie from "@assets/images/selfie.png";
import compressImage from "@helpers/compressImage";
import Image from "next/image";

const MiniInputImage = ({ block, handler }) => {
	const inputRef = useRef(null);

	const [compressedImage, setCompressedImage] = useState(null);
	const [compressingImage, setCompressingImage] = useState(false);
	const [err, setErr] = useState("");
	const [reply, setReply] = useState(null);

	// useEffect(() => {
	// 	if (!block) return;
	// 	setReply(() => block.reply);
	// 	setCompressedImage(block.reply);
	// }, [block]);

	const checkImage = () => {
		if (!reply) {
			setErr("Please upload a jpg or png image");
			return;
		}
		handler(reply);
	};

	const handleImageUpload = async ({ target }) => {
		const _image = target.files[0];

		if (!_image) {
			setCompressedImage(null);
			setReply(null);
			return;
		}
		setCompressingImage(true);
		const _result = await compressImage(_image);
		setCompressingImage(false);

		if (_result.hasError) {
			setErr(() => _result.error);
			return;
		}
		if (isEmpty(_result.compressedImage)) return;
		setReply(_result.compressedImage);

		setCompressedImage(() => _result.compressedImage);

		setErr("");
	};

	return (
		<div className="flex flex-col items-center mt-12 space-y-8 md:mt-20">
			<label className="text-2xl font-bold text-center text-gray-700">
				We need a photo of your scalp for better assessment
			</label>

			<p className="mb-5 text-center text-gray-500">
				Take a selfie of your entire scalp as depicted in the image below
			</p>

			<div className="relative flex flex-col items-center justify-center border-2 border-gray-500 border-dashed w-60 h-60">
				<input
					type="file"
					accept="image/*"
					className="absolute top-0 left-0 z-50 w-full h-full opacity-0 cursor-pointer"
					id={"image"}
					ref={inputRef}
					onChange={handleImageUpload}
				/>

				{compressedImage ? (
					<div className="flex flex-col items-center justify-center max-w-full max-h-full">
						<Image
							src={URL.createObjectURL(compressedImage)}
							alt="uploaded"
							className="object-scale-down align-middle w-44 h-44"
							width={160}
							height={160}
						/>
						<span className="block px-3 py-1 mt-1 text-gray-700">
							Click to change image
						</span>
					</div>
				) : (
					<div className="flex flex-col items-center justify-center max-w-full max-h-full">
						<Image
							src={selfie}
							alt="selfie"
							className="object-scale-down align-middle w-44 h-44"
							width={160}
							height={160}
						/>
						<span className="block px-3 py-1 mt-1 text-white rounded-lg bg-brand-dark">
							+ Click to add image
						</span>
					</div>
				)}
			</div>

			<button
				id="img_upload"
				onClick={() => checkImage()}
				className="px-6 py-2 mx-auto uppercase rounded-md w-max bg-brand-accent text-green-50">
				{compressingImage ? (
					<span className="animate-pulse">Processing</span>
				) : (
					"Upload Image"
				)}
			</button>
			{err !== "" && (
				<span className="block mt-1 text-brand-accent">{err}</span>
			)}
		</div>
	);
};

export default MiniInputImage;
