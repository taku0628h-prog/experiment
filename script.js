// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "心理実験",
    "description": "const consentScreen = new lab.html.Form({\n  title: '同意画面',\n\n  content: `\n    \u003Cmain style=\"max-width: 760px; margin: 40px auto; line-height: 1.8; font-size: 16px;\"\u003E\n      \u003Ch1\u003E研究参加へのお願い\u003C\u002Fh1\u003E\n\n      \u003Cp\u003E\n        本研究は、心理学実験への参加をお願いするものです。\n        実験では、画面に表示される文章・画像・動画などを見た後、\n        いくつかの質問に回答していただきます。\n      \u003C\u002Fp\u003E\n\n      \u003Ch2\u003E参加について\u003C\u002Fh2\u003E\n      \u003Cp\u003E\n        参加は任意です。参加したくない場合は、いつでも中止できます。\n        中止した場合でも、不利益はありません。\n      \u003C\u002Fp\u003E\n\n      \u003Ch2\u003Eデータの扱いについて\u003C\u002Fh2\u003E\n      \u003Cp\u003E\n        回答データは研究目的のみに使用します。\n        個人が特定される形で結果を公表することはありません。\n      \u003C\u002Fp\u003E\n\n      \u003Ch2\u003E同意確認\u003C\u002Fh2\u003E\n\n      \u003Cform\u003E\n        \u003Clabel style=\"display: block; margin: 20px 0;\"\u003E\n          \u003Cinput type=\"checkbox\" name=\"consent\" value=\"agree\"\u003E\n          上記の内容を理解し、研究への参加に同意します。\n        \u003C\u002Flabel\u003E\n\n        \u003Cp id=\"consent-error\" style=\"color: red; display: none;\"\u003E\n          実験を開始するには、同意にチェックを入れてください。\n        \u003C\u002Fp\u003E\n\n        \u003Cbutton type=\"submit\"\u003E\n          同意して実験を開始する\n        \u003C\u002Fbutton\u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fmain\u003E\n  `,\n\n  validator: function(data) {\n    if (data.consent === 'agree' || data.consent === true || data.consent === 'on') {\n      return true;\n    }\n\n    document.querySelector('#consent-error').style.display = 'block';\n    return false;\n  }\n});",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "実験にご参加いただき、ありがとうございます。",
          "content": "この実験は、慶應義塾大学文学部の李光鎬研究会が行う、映画予告編の影響を調べるためのものです。\u003Cbr\u003E\u003Cbr\u003E\nこの実験では、ひとつの映画予告編を見ていただいた後、それに関する質問をいくつか行います。\u003Cbr\u003E\u003Cbr\u003E\n実験を始める前に、次のページで実験参加への同意をいただきます。\u003Cbr\u003E\u003Cbr\u003E\n準備ができましたら「次へ」をクリックしてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));

this.state.participantID = participantID;
this.parameters.participantID = participantID;

const id = Number(participantID);
const condition = (id % 3) + 1;

this.state.condition = condition;
this.parameters.condition = condition;
}
      },
      "title": "はじめに"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "研究参加へのお願い",
          "content": "本研究は、映画予告編の視聴に関する心理学実験です。\u003Cbr\u003E\u003Cbr\u003E\n\u003Cb\u003E【目的】\u003C\u002Fb\u003E　この実験は、映画予告編の視聴による影響を調べるためのものです。\u003Cbr\u003E\n\u003Cb\u003E【所要時間】\u003C\u002Fb\u003E この実験はおおよそ10分かかります。\u003Cbr\u003E\n\u003Cb\u003E【リスク】\u003C\u002Fb\u003E　緊張したり、疲労を感じる可能性があります。\u003Cbr\u003E\n\u003Cb\u003E【リスクへの対策】\u003C\u002Fb\u003E　体調がわるくなった場合には、参加を取りやめてください。\u003Cbr\u003E\n\u003Cb\u003E【謝礼】\u003C\u002Fb\u003E　この実験への参加に対する謝金として10円さしあげます。\u003Cbr\u003E\n\u003Cb\u003E【個人情報】\u003C\u002Fb\u003E　この実験では、個人を特定できる情報は一切収集しません。\u003Cbr\u003E\n\u003Cb\u003E【データの利用】\u003C\u002Fb\u003E　この実験で得られたデータは、学術的な目的にのみ利用します。\u003Cbr\u003E\n\u003Cb\u003E【データの廃棄】\u003C\u002Fb\u003E　この実験で得られたデータは、10年後に廃棄します。\u003Cbr\u003E\u003Cbr\u003E\u003Chr\u003E\n実験では、画面上に提示される予告映像を見ていただいた後、いくつかの質問に回答していただきます。\u003Cbr\u003E\u003Cbr\u003E"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "本研究への参加についての同意",
          "options": [
            {
              "label": "上記の内容を理解し、研究への参加に同意します。",
              "coding": "agree"
            }
          ],
          "name": "consent"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "同意して実験を開始する",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "おねがい"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "ご同意いただき、ありがとうございます。\u003Cbr\u003E\u003Cbr\u003E\nそれでは、実験を始めます。\u003Cbr\u003Eこれから、1～2分ほどの映画予告編を見ていただきます。\n音声と映像が流れますので、周囲の環境にご配慮ください。\u003Cbr\u003E\u003Cbr\u003E\n「次へ」を押してください。",
          "title": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "同意への感謝と動画の導入"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n  button[type=\"submit\"]:not(#nextButton1) {\n    display: none !important;\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cmain style=\"width: 100%; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0;\"\u003E\n\n  \u003Cvideo\n    id=\"trailerVideo1\"\n    width=\"900\"\n    controls\n    playsinline\n    onended=\"\n      document.getElementById('watched_video1').value = 'finished';\n      document.getElementById('nextButton1').disabled = false;\n      document.getElementById('nextButton1').textContent = '次へ';\n    \"\n  \u003E\n    \u003Csource src=\"https:\u002F\u002Ftaku0628h-prog.github.io\u002FTrailer\u002Ftrailer_3.mp4\" type=\"video\u002Fmp4\"\u003E\n  \u003C\u002Fvideo\u003E\n\n  \u003Cform\u003E\n    \u003Cinput type=\"hidden\" name=\"participantID\" value=\"${this.state.participantID}\"\u003E\n    \u003Cinput type=\"hidden\" name=\"condition\" value=\"1\"\u003E\n    \u003Cinput type=\"hidden\" name=\"condition_name\" value=\"動画1\"\u003E\n    \u003Cinput type=\"hidden\" name=\"video_url\" value=\"https:\u002F\u002Ftaku0628h-prog.github.io\u002FTrailer\u002Ftrailer_3.mp4\"\u003E\n    \u003Cinput type=\"hidden\" id=\"watched_video1\" name=\"watched_video\" value=\"not_finished\"\u003E\n\n    \u003Cbutton\n      id=\"nextButton1\"\n      type=\"submit\"\n      disabled\n      style=\"margin-top: 30px; font-size: 18px; padding: 10px 30px;\"\n    \u003E\n      動画終了後に次へ進めます\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fmain\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "動画①",
      "skip": "${this.state.condition != 1}"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n  button[type=\"submit\"]:not(#nextButton2) {\n    display: none !important;\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cmain style=\"width: 100%; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0;\"\u003E\n\n  \u003Cvideo\n    id=\"trailerVideo2\"\n    width=\"900\"\n    controls\n    playsinline\n    onended=\"\n      document.getElementById('watched_video2').value = 'finished';\n      document.getElementById('nextButton2').disabled = false;\n      document.getElementById('nextButton2').textContent = '次へ';\n    \"\n  \u003E\n    \u003Csource src=\"https:\u002F\u002Ftaku0628h-prog.github.io\u002FTrailer\u002Ftrailer_2.mp4\" type=\"video\u002Fmp4\"\u003E\n  \u003C\u002Fvideo\u003E\n\n  \u003Cform\u003E\n    \u003Cinput type=\"hidden\" name=\"participantID\" value=\"${this.state.participantID}\"\u003E\n    \u003Cinput type=\"hidden\" name=\"condition\" value=\"2\"\u003E\n    \u003Cinput type=\"hidden\" name=\"condition_name\" value=\"動画2\"\u003E\n    \u003Cinput type=\"hidden\" name=\"video_url\" value=\"https:\u002F\u002Ftaku0628h-prog.github.io\u002FTrailer\u002Ftrailer_2.mp4\"\u003E\n    \u003Cinput type=\"hidden\" id=\"watched_video2\" name=\"watched_video\" value=\"not_finished\"\u003E\n\n    \u003Cbutton\n      id=\"nextButton2\"\n      type=\"submit\"\n      disabled\n      style=\"margin-top: 30px; font-size: 18px; padding: 10px 30px;\"\n    \u003E\n      動画終了後に次へ進めます\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fmain\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "動画②",
      "skip": "${this.state.condition != 2}"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n  button[type=\"submit\"]:not(#nextButton3) {\n    display: none !important;\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cmain style=\"width: 100%; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0;\"\u003E\n\n  \u003Cvideo\n    id=\"trailerVideo3\"\n    width=\"900\"\n    controls\n    playsinline\n    onended=\"\n      document.getElementById('watched_video3').value = 'finished';\n      document.getElementById('nextButton3').disabled = false;\n      document.getElementById('nextButton3').textContent = '次へ';\n    \"\n  \u003E\n    \u003Csource src=\"https:\u002F\u002Ftaku0628h-prog.github.io\u002FTrailer\u002Ftrailernew3.mp4\" type=\"video\u002Fmp4\"\u003E\n  \u003C\u002Fvideo\u003E\n\n  \u003Cform\u003E\n    \u003Cinput type=\"hidden\" name=\"participantID\" value=\"${this.state.participantID}\"\u003E\n    \u003Cinput type=\"hidden\" name=\"condition\" value=\"3\"\u003E\n    \u003Cinput type=\"hidden\" name=\"condition_name\" value=\"動画3\"\u003E\n    \u003Cinput type=\"hidden\" name=\"video_url\" value=\"https:\u002F\u002Ftaku0628h-prog.github.io\u002FTrailer\u002Ftrailernew3.mp4\"\u003E\n    \u003Cinput type=\"hidden\" id=\"watched_video3\" name=\"watched_video\" value=\"not_finished\"\u003E\n\n    \u003Cbutton\n      id=\"nextButton3\"\n      type=\"submit\"\n      disabled\n      style=\"margin-top: 30px; font-size: 18px; padding: 10px 30px;\"\n    \u003E\n      動画終了後に次へ進めます\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fmain\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "動画③",
      "skip": "${this.state.condition != 3}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "動画を見ていただき、ありがとうございます。\u003Cbr\u003E\u003Cbr\u003E\nここから、この予告編を視聴してあなたが感じたことについていくつか質問させていただきます。\u003Cbr\u003E\u003Cbr\u003E\n「次へ」を押してください。",
          "title": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "動画への感謝と質問の導入"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": ""
        },
        {
          "required": true,
          "type": "textarea",
          "label": "この予告編を見て理解した映画の内容を、簡潔でもいいのでできる限り書いてください。箇条書きでも構いません。",
          "name": "content"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "自由記述"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "radio",
          "label": "この映画のタイトルを、予告編を見る前から知っていましたか。",
          "options": [
            {
              "label": "はい",
              "coding": "yes"
            },
            {
              "label": "いいえ",
              "coding": "no"
            }
          ],
          "name": "question1"
        },
        {
          "required": true,
          "type": "radio",
          "label": "あなたはこの映画の本編をすでに見たことがありますか。",
          "options": [
            {
              "label": "はい",
              "coding": "yes"
            },
            {
              "label": "いいえ",
              "coding": "no"
            }
          ],
          "name": "question2"
        },
        {
          "required": true,
          "type": "radio",
          "label": "あなたはこの予告編を以前に見たことがありますか。",
          "options": [
            {
              "label": "はい",
              "coding": "yes"
            },
            {
              "label": "いいえ",
              "coding": "no"
            }
          ],
          "name": "question3"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん０ー１"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": ""
        },
        {
          "required": false,
          "type": "checkbox",
          "label": "この映画のジャンルは何だと思いますか？（複数選択可）",
          "options": [
            {
              "label": "アクション・アドベンチャー",
              "coding": "action"
            },
            {
              "label": "ホラー",
              "coding": "horror"
            },
            {
              "label": "ロマンス・恋愛",
              "coding": "romance"
            },
            {
              "label": "SF・ファンタジー",
              "coding": "SF"
            },
            {
              "label": "ミステリー・サスペンス",
              "coding": "mystery"
            },
            {
              "label": "ドキュメンタリー",
              "coding": "documentary"
            },
            {
              "label": "コメディ",
              "coding": "comedy"
            },
            {
              "label": "ヒューマンドラマ",
              "coding": "humandrama"
            },
            {
              "label": "特撮",
              "coding": "tokusatsu"
            },
            {
              "label": "わからない",
              "coding": "no"
            }
          ],
          "name": "movie genre"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん０－２"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E この映画の出演者・監督・脚本家・原作などに関心がある。\u003C\u002Fdiv\u003E",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん１－１"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003Eこの映画のジャンルに関心がある。\u003C\u002Fdiv\u003E",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん１－２"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E予告編を見る前から、この映画を見たいと思っていた。\u003C\u002Fdiv\u003E",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん１－３"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003Eこの映画がどのような話なのか理解できた。\u003C\u002Fdiv\u003E",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん２－１"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E登場人物がどのような人物なのか理解できた。\u003C\u002Fdiv\u003E",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん２－２"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E登場人物同士の関係性を理解できた。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん２－３"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E物語の中心的な問題や葛藤を理解できた。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん２－４"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003Eこの映画の世界観や雰囲気を理解できた。\u003C\u002Fdiv\u003E",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん２－５"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E予告編を見て、この後の展開が気になった。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん３－１"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003Eまだ明かされていない部分を知りたいと思った。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん３－２"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E予告編には、もっと知りたくなる余白があった。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん３－３"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E予告編を見たことで、本編への興味が高まった。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん３－４"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E予告編だけで、内容をかなり把握できたと感じた。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん４－１"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E予告編だけで、この映画をある程度見たような気がした。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん４－２"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E予告編を見ただけで満足した。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん４－３"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E本編を見なくても、大体の内容はわかったと思った。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん４－４"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003Eこの映画を見たいと思った。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん５－１"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E映画館で上映されていたら、見ることを検討したい。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん５－２"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E配信サービスで見られるようになったら、見たいと思う。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん５－３"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 全くそう思わない　〜　７ = 非常にそう思う\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
          "title": "\u003Cdiv class = \"content-horizontal-center\"\u003Eこの映画について、さらに情報を調べたいと思った。\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\r\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn6\"\u003E6\u003C\u002Fbutton\u003E\r\n  \u003Cbutton id =\"btn7\"\u003E7\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "しつもん５－４"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": "質問に答えていただき、ありがとうございました。\u003Cbr\u003E\u003Cbr\u003E\nここから、あなたの性別、年齢について教えていただきます。\u003Cbr\u003E\u003Cbr\u003E\n「次へ」を押してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "質問への感謝と基本情報の導入"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "radio",
          "label": "性別を教えてください。",
          "options": [
            {
              "label": "男",
              "coding": "male"
            },
            {
              "label": "女",
              "coding": "female"
            },
            {
              "label": "答えない",
              "coding": "no answer"
            }
          ],
          "name": "gender"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbr\u003E\r\n\r\n\u003Cdiv class=\"page-item\" style=\"margin-bottom: 40px;\"\u003E\r\n    \u003Cp style=\"font-weight: bold; margin-bottom: 10px;\"\u003Eあなたの年齢をお答えください。\u003C\u002Fp\u003E\r\n    \r\n    \u003Cselect id=\"age_dropdown\" name=\"age\" required style=\"font-size: 1.2rem; padding: 10px; width: 100%; max-width: 300px; cursor: pointer;\"\u003E\r\n        \u003Coption value=\"\" disabled selected\u003E選択してください\u003C\u002Foption\u003E\r\n        \u003Coption value=\"回答拒否\"\u003E回答したくない\u003C\u002Foption\u003E\r\n        \u003C\u002Fselect\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// ドロップダウンのパーツを見つける
const ageDropdown = document.getElementById('age_dropdown');

// 18歳から100歳までの選択肢を自動で作って追加する
for (let i = 1; i <= 100; i++) {
    const option = document.createElement('option');
    option.value = i;               // データとして保存される数字
    option.textContent = i + '歳';  // 画面に表示される文字
    ageDropdown.appendChild(option);
}
}
      },
      "title": "基本情報１"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": ""
        },
        {
          "required": false,
          "type": "checkbox",
          "options": [
            {
              "label": "アクション・アドベンチャー",
              "coding": "action"
            },
            {
              "label": "ホラー",
              "coding": "horror"
            },
            {
              "label": "ロマンス・恋愛",
              "coding": "romance"
            },
            {
              "label": "SF・ファンタジー",
              "coding": "SF"
            },
            {
              "label": "ミステリー・サスペンス",
              "coding": "mystery"
            },
            {
              "label": "ドキュメンタリー",
              "coding": "documentary"
            },
            {
              "label": "コメディ",
              "coding": "comedy"
            },
            {
              "label": "ヒューマンドラマ",
              "coding": "human drama"
            },
            {
              "label": "特撮",
              "coding": "tokusatsu"
            },
            {
              "label": "特にない",
              "coding": "nothing"
            }
          ],
          "label": "あなたの好きな映画のジャンルを教えてください。（複数選択可）",
          "name": "favorite genre"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "基本情報２"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": "実験は以上です。ありがとうございました。\u003Cbr\u003E\u003Cbr\u003E\n"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "はい",
              "coding": "yes"
            },
            {
              "label": "いいえ",
              "coding": "no"
            }
          ],
          "label": "【同意の確認】この回答を研究データとして利用しても構いませんか？",
          "name": "last check"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "実験を終了する",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "ZmhCproZmw7Q",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "最後に",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()