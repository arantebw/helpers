import { v4 as uuidv4 } from "uuid";

const generateUniqueKey = () => {
  return uuidv4();
};

export default generateUniqueKey;
