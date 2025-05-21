import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const AddTask = () => {
    const { user } = use(AuthContext)

    const [deadline, setDeadline] = useState(null);

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;

        const taskData = {
            title: form.title.value,
            photo: form.photo.value,
            category: form.category.value,
            description: form.description.value,
            deadline: deadline?.toISOString().split("T")[0],
            budget: form.budget.value,
            email: form.email.value,
            username: form.username.value,
        };

        console.log(taskData);

        // send jobs to database
        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskData)

        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Job Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                
            })
    };

    return (
        <div className='bg-[#f6fcfa] '>
            <div className='w-7xl mx-auto bg-[#f6fcfa]'>

                <div className="p-24">
                    <h2 className="text-3xl text-center text-[#374151] font-extrabold">Add a Task</h2>
                    <p className='text-center text-[#1B1A1AB3] w-[900px] mx-auto mb-8 '>
                        Fill in the details below to post your task. Freelancers will see this and be able to apply.
                    </p>
                    <form onSubmit={handleAddTask}>
                        {/* Task Title and Category */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-gray-900 font-medium">Task Title</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="title"
                                    placeholder="Task Title"
                                    className="w-full px-3 py-2 border border-gray-300 text-[#1B1A1A99] text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#204c3f]"
                                />
                            </div>

                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-gray-900 font-medium">Category</span>
                                </label>
                                <select
                                    name="category"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 text-[#1B1A1A99] text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#204c3f]"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Content Creation">Content Creation</option>
                                    <option value="Social Media Management">Social Media Management</option>
                                    <option value="Video Editing">Video Editing</option>
                                    <option value="Photography">Photography</option>
                                    <option value="Branding">Branding</option>
                                    <option value="Data Analysis">Data Analysis</option>
                                </select>
                            </div>
                        </div>

                        {/* budget and Deadline */}
                        <div className="md:flex mb-8">
                            {/* budget Field */}

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-gray-900 font-medium">Budget ($)</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="number"
                                        required
                                        name="budget"
                                        placeholder="Enter Budget"
                                        className="w-full px-3 py-2 border border-gray-300 text-[#1B1A1A99] text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#204c3f]"
                                    />
                                </label>
                            </div>



                            {/* Deadline Field */}
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-gray-900 font-medium">Deadline</span>
                                </label>
                                <div className="h-full">
                                    <DatePicker
                                        selected={deadline}
                                        onChange={(date) => setDeadline(date)}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Select deadline"
                                        required
                                        className="w-full h-full px-3 py-2 border border-gray-300 text-[#1B1A1A99] text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#204c3f]"
                                    />
                                </div>
                            </div>
                        </div>


                        {/*  and User Email */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-gray-900 font-medium">User Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    defaultValue={user?.displayName}
                                    readOnly
                                    className="w-full px-3 py-2 border border-gray-300 text-[#1B1A1A99] text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#204c3f]"
                                />
                            </div>

                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-gray-900 font-medium">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    defaultValue={user?.email}
                                    readOnly
                                    className="w-full px-3 py-2 border border-gray-300 text-[#1B1A1A99] text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#204c3f]"
                                />
                            </div>
                        </div>





                        {/* Description */}
                        <div className="md:flex  mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-gray-900 font-medium">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="What needs to be done?"
                                    required
                                    className="w-full h-full px-3 py-2 border border-gray-300 text-[#1B1A1A99] text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#204c3f]"
                                ></textarea>
                            </div>

                            <div className="form-control md:ml-4 md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-gray-900 font-medium">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="Photo URL"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 text-[#1B1A1A99] text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#204c3f]"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <input type="submit" value="Add Task" className="btn bg-[#204c3f] text-white w-full py-1 border border-[#] cursor-pointer" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default AddTask;