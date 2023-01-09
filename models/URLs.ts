import Omanyd from "omanyd";
import Joi from "joi";

interface URL {
  url_hash: string;
  url: string;
  createdAt?: string;

}

export const URLStore = Omanyd.define<URL>({
  name: "linkly_urls",
  hashKey: "url_hash",
  allowNameClash: true,
  schema: Joi.object({
    url_hash: Joi.string().required(),
    url: Joi.string().required(),
    createdAt: Joi.string().default(Date.now().toString())
  }),
});