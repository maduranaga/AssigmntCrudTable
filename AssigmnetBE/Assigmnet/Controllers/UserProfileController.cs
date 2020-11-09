using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assigmnet.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Assigmnet.Controllers
{
    [Produces("application/json")]
    [Route("api/UserProfile")]
    public class UserProfileController : ControllerBase
    {
        private readonly UserProfileContext _context;
        private readonly ILogger<UserProfileController> _logger;

        public UserProfileController(UserProfileContext context, ILogger<UserProfileController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpPost("PostUserProfile")]
        public async Task<ActionResult<UserProfile>> PostUserProfile([FromBody] UserProfile user)
        {

            try
            {
                _context.UserProfile.Add(user);
                await _context.SaveChangesAsync();


                return user;
            }

            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new NotImplementedException();
            }
        }

        [HttpGet("ListAll")]
        public async Task<List<UserProfile>> ListAll()
        {

            try
            {

                var list = new List<UserProfile>();
                list = _context.UserProfile.OrderBy(m => m.FirstName).ToList();
                return list;

            }

            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new NotImplementedException();
            }
        }

        [HttpGet("getByprofileId/{id}")]

        public async Task<List<UserProfile>> getByprofileId([FromRoute] int? id = null)

        {
            try
            {
                var list = new List<UserProfile>();
                list = _context.UserProfile.OrderBy(m => m.FirstName).Where(m=>m.Id==id).ToList();
                return list;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new NotImplementedException();
            }
        }

        [HttpPut("UpdateProfile/{id}")]
        public async Task<string> UpdateProfile([FromRoute] int id, [FromBody] UserProfile profileupdate)
        {
            try
            {
                _context.UserProfile.Update(profileupdate);
                await _context.SaveChangesAsync();

                return "Sucess Updated";
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete("DeleteProfile/{id}")]
        public async Task<string> DeleteProfile(int id)
        {
            try
            {
                
                var user = _context.UserProfile.Where(m=>m.Id==id).FirstOrDefault();
                var msg="";
                if (user!=null)
                {
                    _context.UserProfile.Remove(user);
                    await _context.SaveChangesAsync();
                    msg = "Successfully deleted";
                }
                else
                {
                    msg = "Can not delete.";
                }
                return msg;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new NotImplementedException();
            }
        }




    }
}
