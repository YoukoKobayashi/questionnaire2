import React from "react";
import { useForm, Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import {db} from "../config/firebase";
import {collection, addDoc} from "firebase/firestore";


export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    watch("learning") === "true" || watch("learned") === "true" ?
      // firebase
        // .firestore()
        addDoc(collection(db,"questionnaires"),{
          name: data.name,
          birthday: data.birthday,
          learning: data.learning,
          learned: data.learned,
          programing: data.programing,
        }) :
      // firebase
        // .firestore()
        addDoc(collection(db,"questionnaires"),{
          name: data.name,
          birthday: data.birthday,
          learning: data.learning,
          learned: data.learned,
        });
  };

  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Q1.名前を入力してください</label>
            {/* <input id="name" {...register("name", { required: true })} />*/}
            {/* {errors.name && <span>入力が必須の項目です</span>} */}
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChange={onChange} />
              )}
            />
          </div>
          <div>
            <label htmlFor="birthday">
              Q2.生年月日を入力してください（例）20050401
            </label>
            {/* <input
              id="birthday"
              {...register(
                "birthday",
                { maxLength: 8, minLength: 8 },
                { required: true, pattern: /^[0-9]{8}$/ }
              )}
            />*/}
            {errors.birthday && <span>入力が必須の項目です</span>}
            <Controller
              name="birthday"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChange={onChange} />
              )}
            />
          </div>

          <div>
            <span>Q3.現在プログラミング学習をしていますか？</span>
            <input
              id="learning1"
              {...register("learning", { required: true })}
              name="learning"
              type="radio"
              value="true"
            />
            <label htmlFor="learning1">はい</label>
            {/* {true && <Input type="text" />} */}
            <input
              id="learning2"
              {...register("learning", { required: true })}
              name="learning"
              type="radio"
              value="false"
            ></input>
            <label htmlFor="learning2">いいえ</label>
            <input
              id="learning3"
              {...register("learning", { required: true })}
              name="learning"
              type="radio"
              value="unknown"
            ></input>
            <label htmlFor="learning3">わからない</label>
            {errors.learning && <span>入力が必須の項目です</span>}
          </div>

          <div>
            <span>
              Q4.これまでに、プログラミング学習をしたことがありますか？
            </span>
            <input
              id="learned1"
              {...register("learned", { required: true })}
              name="learned"
              type="radio"
              value="true"
            />
            <label htmlFor="learned1">はい</label>
            <input
              id="learned2"
              {...register("learned", { required: true })}
              name="learned"
              type="radio"
              value="false"
            />
            <label htmlFor="learned2">いいえ</label>
            <input
              id="learned3"
              {...register("learned", { required: true })}
              name="learned"
              type="radio"
              value="unknown"
            />
            <label htmlFor="learned3">わからない</label>
            {errors.learned && <span>入力が必須の項目です</span>}
          </div>
          {watch("learning")=="true" || watch("learned")=="true" ? (
            <div>
              <label htmlFor="programing">
                Q5.学習経験のあるプログラミング言語を教えてください
              </label>
              <input
                id="programing"
                {...register("programing")}
                name="programing"
                type="text"
              />
            </div>
          ) : null}

          <input type="submit" value="アンケートを提出する" />
        </form>
      </Container>
    </>
  );
}

