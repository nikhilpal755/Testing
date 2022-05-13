import {jest} from '@jest/globals'
import axios from 'axios';
// const mockResponse = {
//     data: {
//         profileid: "3c80c8cc-f21c-4329-b4fb-e341564084da",
//         first_name: "Subramaneswara Swamy",
//         last_name: "Goverdana",
//         college_code: "T01",
//         profiletype: "teacher",
//         profile_information_code: null,
//         specialization_code: null,
//         statusQuo: 0,
//     }
// }

export default {
      post: jest.fn(() => Promise.resolve({ data: {} })),
      create: () => axios,
      defaults: {
        adapter: {},
      },
  };
