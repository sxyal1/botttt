import discord

TOKEN = "YOUR_DISCORD_BOT_TOKEN"
CHANNEL_ID = 1234567890  # ID канала, в котором будут отправляться сообщения

client = discord.Client()

@client.event
async def on_ready():
    print(f"Logged in as {client.user}")

@client.event
async def on_message(message):
    if message.content.startswith("!token"):
        user_id = message.author.id
        token = "YOUR_TOKEN"
        
        channel = client.get_channel(CHANNEL_ID)
        await channel.send(f"Your token is: {token}")
        
@client.event
async def on_member_join(member):
    channel = client.get_channel(CHANNEL_ID)
    await channel.send(f"Welcome {member.name}! Your token is now available in your DMs.")
    
client.run(TOKEN)
