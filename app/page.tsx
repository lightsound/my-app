"use client";

import { Avatar, TextField } from "@radix-ui/themes";

const Home = () => {
  return (
    <form>
      <Avatar
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="S"
      />
      <label>はろー</label>
      <input type="text" />
      <TextField.Input type="text" />
    </form>
  );
};

export default Home;
