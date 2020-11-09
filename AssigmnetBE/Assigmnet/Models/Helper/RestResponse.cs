using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Assigmnet.Models.Helper
{
    public class RestResponse
    {


        public HttpStatusCode StatusCode;
        public bool IsSuccsess;
        public string Message;
        public object Data;

        public RestResponse(HttpStatusCode status, bool isSuccess, string message, object data)
        {
            StatusCode = status;
            IsSuccsess = isSuccess;
            Message = message;
            Data = data;
        }
        public RestResponse(string message)
        {

            Message = message;

        }
    }

    public enum Message { Success, Error }

}
