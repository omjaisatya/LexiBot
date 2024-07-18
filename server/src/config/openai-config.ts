// import Configuration from "openai";
// import { OPEN_AI_SECRET, OPENAI_ORAGANIZATION_ID } from "./envConfig";
// // import {Conf} from 'openai'

// export const configureOpenAI = () => {
//   const config = new Configuration({
//     apiKey: OPEN_AI_SECRET,
//     organization: OPENAI_ORAGANIZATION_ID,
//   });
//   return config;
// };

import OpenAI from "openai";

export const configureOpenAI = () => {
  const openaiConf = new OpenAI({
    organization: "org-du8ZgnNYTYlpdSzciyqxRtb3",
    project: "$PROJECT_ID",
  });
  return openaiConf;
};
