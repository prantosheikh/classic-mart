import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const AddProductForm = () => {
	const options = [
		{ value: "option1", label: "Option 1" },
		{ value: "option2", label: "Option 2" },
		{ value: "option3", label: "Option 3" },
	];

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();

	return (
		<div className="w-full">
			<div className="flex justify-between items-center gap-4">
				<div className=" border w-[45%] p-4">
					<form onSubmit={handleSubmit((data) => console.log(data))}>
						<div className=" w-full">
							<label className="label">
								<span className="label-text">Class Name</span>
							</label>
							<input
								className="py-2 ps-3 border border-[#251658] me-4 rounded w-full
        "
								//   defaultValue="test"
								placeholder="Class Name"
								required
								{...register("ClassName", { required: true })}
							/>
						</div>
						<div className="my-3">
							<label className="label">
								<span className="label-text">Class Name</span>
							</label>
							<div className="flex justify-center gap-3">
								<div className="w-[70%]">
									<Controller
										name="selectedOption"
										control={control}
										defaultValue={null}
										render={({ field }) => (
											<Select
												{...field}
												options={options}
											/>
										)}
									/>
								</div>
								<div className="w-[30%]">
									<Controller
										name="selectedOption"
										control={control}
										defaultValue={null}
										render={({ field }) => (
											<Select
												{...field}
												options={options}
												isSearchable
											/>
										)}
									/>
								</div>
							</div>
						</div>
						<div className="my-3">
							<label className="label">
								<span className="label-text">Class Name</span>
							</label>
							<div className="">
								<Controller
									name="selectedOption"
									control={control}
									defaultValue={null}
									render={({ field }) => (
										<Select {...field} options={options} />
									)}
								/>
							</div>
						</div>
						<input {...register("age", { pattern: /\d+/ })} />
						{errors.age && <p>Please enter number for age.</p>}
						<input type="submit" />
					</form>
				</div>
				<div className="w-[55%] border p-4">
					<h2>With</h2>
				</div>
			</div>
		</div>
	);
};

export default AddProductForm;
