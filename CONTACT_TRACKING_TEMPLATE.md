# Contact Form Tracking Template

## Google Sheets Setup

Create a new Google Sheet with these columns:

| Date | Time | Name | Email | Phone | Project Type | Budget | Message | Status | Response Date | Notes | Follow-up |
|------|------|------|-------|-------|--------------|--------|---------|--------|---------------|-------|-----------|
| 1/28/2025 | 2:30 PM | John Doe | john@example.com | 123-456-7890 | Website | $1k-3k | Need new site... | Responded | 1/28/2025 | Sent quote | 2/1/2025 |

### Column Descriptions:
- **Date/Time**: When form was submitted
- **Name**: First + Last name
- **Email**: Contact email
- **Phone**: Phone if provided
- **Project Type**: From dropdown selection
- **Budget**: From dropdown selection
- **Message**: Full message text
- **Status**: New | Responded | Quoted | Won | Lost | Spam
- **Response Date**: When you replied
- **Notes**: Internal notes
- **Follow-up**: Next action date

### Status Color Coding:
- New = Red
- Responded = Yellow
- Quoted = Orange
- Won = Green
- Lost = Gray
- Spam = Black

## Email Templates

### Initial Response (within 24 hours)

**Subject:** Re: iPaul Media - {Project Type} Inquiry

```
Hi {FirstName},

Thank you for contacting iPaul Media about your {project type} project.

I've reviewed your message and I'm excited about the opportunity to help. Based on your {budget range} budget, I believe we can create something great together.

I'd love to learn more about your specific needs. Are you available for a quick 15-minute call this week? I have openings:

- Wednesday at 2:00 PM CST
- Thursday at 10:00 AM CST
- Friday at 3:00 PM CST

Or feel free to call me directly at 945-358-6236.

Looking forward to speaking with you!

Best regards,
[Your Name]
iPaul Media
```

### Follow-up (3 days later)

**Subject:** Following up - {Project Type} Project

```
Hi {FirstName},

I wanted to follow up on your inquiry about {project type} services. 

I understand you're busy, but I'd still love to discuss how we can help with your project. Even a quick 10-minute call could help clarify your needs and timeline.

Would any of these times work for a brief chat?
- [Day] at [Time]
- [Day] at [Time]

Or simply reply with a time that works better for you.

Best,
[Your Name]
```

### Quote Follow-up (1 week after quote)

**Subject:** Checking in on your {project type} quote

```
Hi {FirstName},

I wanted to check in regarding the quote I sent last week for your {project type} project.

Do you have any questions about the proposal? I'm happy to adjust the scope or discuss different options that might better fit your needs.

Let me know if you'd like to schedule a quick call to discuss.

Best,
[Your Name]
```

## Response Time Goals

- **Acknowledge**: Within 2 hours (business hours)
- **Full Response**: Within 24 hours
- **Quote**: Within 48-72 hours
- **Follow-up**: 3 days after no response
- **Final Follow-up**: 1 week after quote

## CRM Integration (Optional)

### Free CRM Options:
1. **HubSpot Free**
   - Import contacts via CSV
   - Set up pipeline stages
   - Automate follow-ups

2. **Google Contacts + Calendar**
   - Add contacts with labels
   - Set calendar reminders for follow-ups
   - Use Google Tasks for action items

3. **Notion Database**
   - Create contacts database
   - Link to projects
   - Track communication history

### What to Track:
- First contact date
- Last contact date
- Project value (estimated and actual)
- Win/loss reason
- Referral source
- Client satisfaction score

## Monthly Reporting

Track these metrics:
1. **Lead Volume**: Total inquiries
2. **Response Rate**: % responded within 24 hours
3. **Conversion Rate**: Inquiries → Clients
4. **Average Project Value**: By type
5. **Most Common Requests**: For service planning
6. **Lost Deal Reasons**: For improvement

## Best Practices

1. **Always respond** even if it's just to say no
2. **Be honest** about capabilities and timeline
3. **Document everything** in your tracking system
4. **Follow up** but don't be pushy (3 attempts max)
5. **Ask for feedback** on lost deals
6. **Keep templates updated** based on what works
7. **Test your form monthly** to ensure it's working
