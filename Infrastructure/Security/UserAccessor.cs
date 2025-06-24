﻿using Application.Interfaces;
using Domain;
using Microsoft.AspNetCore.Http;
using Persistence;
using System.Security.Claims;

namespace Infrastructure.Security
{
    public class UserAccessor(IHttpContextAccessor httpContextAccessor, AppDbContext dbContext) : IUserAccessor
    {
        //public async Task<User> GetUserAsync()
        //{
        //    var userId = httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
        //    return await dbContext.Users.FindAsync(userId) ??
        //         throw new Exception("User not found");
        //}

        public async Task<User> GetUserAsync()
        {
            return await dbContext.Users.FindAsync(GetUserId()) ??
                 throw new Exception("User not found");
        }

        public string GetUserId()
        {
            return httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier) ??
                  throw new Exception("User ID not found in claims");
        }
    }
}
