import React from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';

function TodoForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('http://localhost:3000/create-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to create task');

      const result = await res.json();
      console.log('Success:', result);

      // Optionally reset form
      reset();
      alert('Task created successfully!');
    } catch (err) {
      console.error(err);
      alert('Error creating task');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Todo</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">Title is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows = "4"
            placeholder="Enter description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">Description is required</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>

      <a href="/alltodos=">All Todos</a>
    </div>
  );
}

export default TodoForm;
