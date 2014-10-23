using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace Ambro.Controllers
{
    public class ContactController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Post(dynamic con)
        {
            var f = new MailAddress("kcurren@3dudestech.com", "Kyle Curren");

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(f.Address, "TechRock")
            };
            using (var message = new MailMessage()
            {
                Subject = "Yellow from " + (string)con.fullName,
                Body = (string)con.email + " says<br><br>" + (string)con.body,
                IsBodyHtml = true
            })
            {
                message.From = new MailAddress((string)con.email, (string)con.fullName);
                message.To.Add("ksc4130@gmail.com");
                message.To.Add("aedballs@gmail.com");
                smtp.Send(message);
            }
            return Ok();
        }
    }
}
