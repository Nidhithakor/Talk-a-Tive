import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from '../componets/ChatBox'
import MyChats from '../componets/MyChats';

import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../componets/miscellaneous/SideDrawer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

 const Chatpage = () => {
const [fetchAgain, setFetchAgain] = useState(false);
 const { user } = ChatState();

 

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer  />}
      <Box className="mychat-main-chatpage md:w-28 " >
        {user && <MyChats fetchAgain={fetchAgain}/>}
        {user && (
          <Chatbox
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
