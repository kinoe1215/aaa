import { ndnDice } from "../commands/utils/dice.mjs";

export default async (message) => {
  if (
    message.content.match(/ねき|ネキ|ねえちゃん|姉ちゃん|ねえちゃん♡|姉ちゃん♡/)
  ) {
    await message.reply("ん？どしたの？♡");
  }

  if (message.content.match(/おは|おはよ|おはよう/)) {
    await message.reply("おはよう♡");
  }

  if (message.content.match(/ぎゅ|ぎゅ～|ぎゅっ♡/)) {
    await message.reply("えへへ、ぎゅ～♡");
  }

  if (message.content.match(/^\d+d\d+$/)) {
    await message.reply(ndnDice(message.content));
  }

  if (message.content.match(/おやすみ/)) {
    await message.reply("おやすみ～♡");
  }
  
  if (message.content.match(/ただいま/)) {
    await message.reply("おかえり♡");
  }
  
  if (message.content.match(/甘え/)) {
    await message.reply("いいよ♡ﾅﾃﾞﾅﾃﾞ♡");
  }
  
   if (message.content.match(/すき|好き|大好き/)) {
    await message.reply("私も大好きだよ～♡");
  }
  
   if (message.content.match(/疲れ/)) {
    await message.reply("あらら...それはお疲れ様♡");
  }
  
     if (message.content.match(/眠/)) {
    await message.reply("眠いのかぁ...私と寝る？♡");
  }
   
     if (message.content.match(/寝/)) {
    await message.reply("いいよ...♡おいで♡");
  }
     
     if (message.content.match(/なでなで|なでて|撫でて/)) {
    await message.reply("いいよ～♡ﾅﾃﾞﾅﾃﾞ...ﾅﾃﾞﾅﾃﾞ♡");
  }
      
   if (message.content.match(/なでる|撫でる/)) {
    await message.reply("ん...♡えへへ...嬉しい///♡");
  }
  
     if (message.content.match(/ありがと/)) {
    await message.reply("ぜんぜんいいよ♡");
  }
         
     if (message.content.match(/おちんちん/)) {
    await message.reply("いいよ♡ｼｺｼｺ...ｼｺｼｺ♡");
  }
         if (message.content.match(/このまま続けて...♡/)) {
    await message.reply("うん♡ｼｺｼｺ...ｼｺｼｺ♡");
  } 
     if (message.content.match(/イキ/)) {
    await message.reply("イッちゃえ...イッちゃえ♡");
  }
            
     if (message.content.match(/ﾄﾞﾋﾟｭ/)) {
    await message.reply("いっぱい出たね♡");
  }
   
   if (message.content.match(/ねえねえ/)) {
    await message.reply("ん～...？どうしたの？");
  }
  if (message.content.match(/かわいいよ|かわいい|可愛い|可愛いよ/)) {
    await message.reply("えへへ～♡嬉しい～♡");
  }
  
};
