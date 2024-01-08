"use client";

import { getUsers } from "@/api/get-users";
import { updateUser } from "@/api/update-user";
import { queryClient } from "@/lib/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const GET_USERS = "get-users";

type Form = {
  name: string;
};

export default function Home() {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: [GET_USERS],
    queryFn: getUsers,
  });

  const { mutate } = useMutation({
    mutationFn: updateUser,
    onSuccess: (result, variables) => {
      queryClient.setQueryData(
        [GET_USERS],
        (old: {
          users: Array<{ id: number; name: string; email: string }>;
        }) => ({
          users: old.users.map((user) => {
            if (user.id === variables.id) {
              return result.user;
            }
            return user;
          }),
        })
      );
    },
  });

  const { register, handleSubmit } = useForm<Form>();

  function onSubmit(data: Form) {
    mutate({
      id: 1,
      name: data.name,
    });
  }

  return (
    <div className="p-24">
      {(isLoading || isFetching) && "Carregando"}

      <div className="py-1">
        {data &&
          data.users.map((u) => (
            <li key={u.id}>
              {u.name} - {u.email}
            </li>
          ))}
      </div>
      <hr className="my-10" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-96 gap-2"
      >
        <input type="text" {...register("name")} />
        <button
          type="submit"
          className="p-2 bg-green-500 text-green-950 rounded-md"
        >
          Change first user
        </button>
      </form>
    </div>
  );
}
