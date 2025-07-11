import { EmbedBuilder } from "discord.js";

import Notification from "../models/notification.mjs"

export default async (oldState, newState) => {
    if (newState.channelId != null){
    const notifications = await Notification.findAll({
      where: {
        guildId: newState.guild.id,
        voiceChannelId: newState.channel.id,
      },
    });
    
    const embed = new EmbedBuilder()
      .setColor(0x5cb85c)
      .setAuthor({ name: newState.member.displayName, iconURL: newState.member.displayAvatarURL()})
      .setTitle(`<#${newState.channel.id}> で通話を開始しました！`)
      .setTimestamp();
    
    await Promise.all(
      notifications.map(async n => {
        const channel = await newState.guild.channels.fetch(n.textChannelId);
        await channel.send({ embeds: [embed] });
      })
    );
  }
};
