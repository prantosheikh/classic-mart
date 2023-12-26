import { useForm } from "react-hook-form";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Swal from "sweetalert2";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddProduct = () => {
	const { register, handleSubmit, watch, reset } = useForm();
	// const [axiosSecure] = useAxiosSecure();
	const onSubmit = (Addclass) => {
		const {
			AvailableSeats,
			ClassImage,
			ClassName,
			InstructorEmail,
			InstructorName,
			Price,
			// status,
		} = Addclass;

		const newCalss = {
			AvailableSeats: parseFloat(AvailableSeats),
			ClassImage,
			ClassName,
			InstructorEmail,
			InstructorName,
			price: parseFloat(Price),
			// status,
		};
		// console.log(newCalss);

		// console.log(Addclass);
		// axiosSecure.post("/instructorsclas", { newCalss }).then((data) => {
		// 	console.log(data.data);
		// 	if (data.data.insertedId) {
		// 		Swal.fire({
		// 			position: "top-end",
		// 			icon: "success",
		// 			title: "Your work has been saved",
		// 			showConfirmButton: false,
		// 			timer: 1500,
		// 		});
		// 		reset();
		// 	}
		// });
		// fetch("https://soccer-club-server.vercel.app/instructorsclass", {
		//   method: "POST",
		//   headers: {
		//     "content-type": "application/json",
		//   },
		//   body: JSON.stringify(newCalss)
		// })
		//   .then(res => res.json())
		//   .then(data => {
		//     console.log(data);
		// })
	};

	console.log(watch("example")); // watch input value by passing the name of it

	//   const {  } = useAuth();
	// console.log();

	return (
		<div className="w-full px-16">
			<div className="flex justify-between items-start my-6">
				<div className="w-2/3">
					<h2 className=" text-2xl font-semibold mb-12">
						Add Product !
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quibusdam dignissimos itaque in, distinctio similique
						quia harum velit nostrum natus. Sequi dolorum dicta,
						autem neque quasi beatae aperiam magni illum at!
					</p>
				</div>
				<div className="w-1/3 flex justify-between gap-3">
					<button className="py-1 px-3 border">
						Open Decortication{" "}
					</button>
					<button className="py-1 px-3 border hover:border">
						Setup Detail
					</button>
					<button className="py-1 px-3 border">
						<HiOutlineDotsHorizontal />
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
