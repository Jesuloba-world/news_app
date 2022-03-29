import { CommentSection } from "./commentForm.style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { observer } from "mobx-react";
import store from "../../store";

const commentSchema = yup.object().shape({
	name: yup.string().required(),
	comment: yup.string().required(),
});

export const CommentForm = observer(({ title }) => {
	const { register, handleSubmit, reset } = useForm({
		resolver: yupResolver(commentSchema),
	});

	const submit = (data) => {
		data["title"] = title;
		store.createComment(data);
		reset();
	};

	return (
		<CommentSection>
			<form onSubmit={handleSubmit(submit)}>
				<input
					name="name"
					type={"text"}
					{...register("name")}
					placeholder="Enter User Name"
				/>
				<textarea
					name="comment"
					{...register("comment")}
					placeholder="Your Comment"
				/>
				<button>Add comment</button>
			</form>
		</CommentSection>
	);
});
