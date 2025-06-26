using Application.Profiles.Commands;
using FluentValidation;

namespace Application.Profiles
{
    public class EditProfileValidator : AbstractValidator<EditProfile.Command>
    {
        public EditProfileValidator()
        {
            RuleFor(x => x.DisplayName)
           .NotEmpty().WithMessage("Activity ID is required");
        }
    }
}
